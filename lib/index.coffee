Promise = require "bluebird"

module.exports = (func) ->
	return (err) ->
		Promise.try ->
			func(err)
		.catch ->
			# Consume any errors
			Promise.resolve()
		.then ->
			Promise.reject(err)
