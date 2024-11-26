const Joi = require ('joi')

const schema = Joi.object({
    name: Joi.string().required().min(5).max(50),
})

const validateGenre = (genre) => {
    return schema.validate(genre);
};

module.exports = validateGenre;