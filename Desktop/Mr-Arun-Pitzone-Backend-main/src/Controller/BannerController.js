const { BannerService } = require('../Service');

exports.addBanner = async (req, res) => {
	try {
		const payload = req.body


		const result = await BannerService.addBanner(payload)
		if (result.status) {
			res.status(result.status).json({
				message: result.message,
				success: result.success,
				status: result.status,
				data: result.data,

			})
		} else {
			res.status(result.status).json({
				message: result.message,
				status: result.status,
				success: success
			})
		}
	} catch (error) {
		console.log(error)
		res.status(500).json({
			message: error.message
		})
	}
}

exports.getBanner = async (req, res,) => {
	try {
		let result = await BannerService.getBanner({})
		if (result.success) {
			res.status(result.status).json({
				message: result.message,
				success: result.success,
				status: result.status,
				data: result.data,

			})
		} else {
			res.status(result.status).json({
				message: result.message,
				success: result.success,
				status: result.status,
			})
		}
	} catch (error) {
		console.log(error);
		res.status(500).json({
			message: error.message
		})
	}
}

exports.updateBanner = async (req, res) => {
	try {
		let payload = req.body;
		if (req.file) {
			let img = {
				filename: req.file.filename,
				filesize: req.file.size,
				filetype: req.file.mimetype,
				url: process.env.BASE_URL + "public/banner/" + req.file.filename
			}

			payload.banner = img
		}
		let bannerId = req.params.bannerid
		let result = await BannerService.updateBanner(bannerId, payload)
		if (result.success) {
			res.status(result.code).json({
				success: result.success,
				message: result.message,
				data: result.data
			})
		} else {
			res.status(result.code).json({
				success: result.success,
				message: result.error
			})
		}
	} catch (error) {
		throw error
	}
}

exports.deleteBanner = async (req, res, next) => {
	try {
		let bannerId = req.params.bannerid
		let result = await BannerService.deleteBanner(bannerId)
		if (result.success) {
			res.status(result.status).json({
				success: result.success,
				status: result.status,
				message: result.message,
				data: result.data
			})
		} else {
			res.status(result.status).json({
				success: result.success,
				status: result.status,
				message: result.error
			})
		}

	} catch (error) {
		next(error)
	}
}
