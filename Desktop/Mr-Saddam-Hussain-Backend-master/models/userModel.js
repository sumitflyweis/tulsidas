const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const validator = require("validator");
const crypto = require("crypto");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "Please Enter your First name"],
  },
  middleName: {
    type: String,
    required: [true, "Please enter your Middle Name."],
  },
  lastName: {
    type: String,
    required: [true, "Please enter your Last name."],
  },
  fullName: {
    type: String,
  },
  country: {
    type: String,
    required: [true, "Please enter your Country Name!"],
  },
  email: {
    type: String,
    required: [true, "Please Enter your E-mail!"],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "Please provide your valid E-mail!"],
  },
  password: {
    type: String,
    required: [true, "Please Provide a Password!"],
    minlength: 8,
    select: false,
  },
  phone: {
    type: Number,
   // required: [true, "Please provide Phone Number!"],
   // validate: [validator.isMobilePhone, "Please provide a valid phone Number!"],
  },
  otp:{
    type:Number
  },

  // passwordConfirm: {
  //   type: String,
  //   required: [true, "Please confirm your Password!"],
  //   validate: {
  //     // This only works on CREATE and SAVE!!!!
  //     validator: function (el) {
  //       return el === this.password;
  //     },
  //     message: "Passwords are not the same!",
  //   },
  // },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
  passwordChangedAt: Date,
  passwordResetToken: String,
  passwordResetExpires: Date,
  active: {
    type: Boolean,
    default: true,
    select: false,
  },
});

userSchema.pre("save", async function (next) {
  // Only run when password is actually changed!
  if (!this.isModified("password")) return next();

  // Hash the password at the cost of 12.
  this.password = await bcrypt.hash(this.password, 12);

  // Delete the passwordConfirm Field
  this.passwordConfirm = undefined;
  next();
});

userSchema.pre("save", function (next) {
  this.fullName = `${this.firstName} ${this.middleName} ${this.lastName}`;
  next();
});

userSchema.pre("save", function (next) {
  if (!this.isModified("password") || !this.isNew) return next();

  this.passwordChangedAt = Date.now() - 1000;
  next();
});

userSchema.pre(/^find/, function (next) {
  // this points to the current query
  this.find({ active: { $ne: false } });
  next();
});
// :IMP: Instance Method.
userSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

userSchema.methods.changedPasswordAfter = function (JWTTimestamp) {
  if (this.passwordChangedAt) {
    const changedTimestamp = parseInt(
      this.passwordChangedAt.getTime() / 1000,
      10
    );

    // console.log(changedTimestamp, JWTTimestamp);
    return JWTTimestamp < changedTimestamp;
  }

  return false;
};

userSchema.methods.createPasswordResetToken = function () {
  const resetToken = crypto.randomBytes(32).toString("hex");

  this.passwordResetToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  // console.log({ resetToken }, this.passwordResetToken);

  this.passwordResetExpires = Date.now() + 10 * 60 * 1000;

  return resetToken;
};

const User = mongoose.model("User", userSchema);

module.exports = User;
