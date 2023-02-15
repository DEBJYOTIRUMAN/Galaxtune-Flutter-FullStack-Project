import Joi from 'joi';
const musicSchema = Joi.object({
    title: Joi.string().required(),
    authors: Joi.string().required(),
    rating: Joi.number().required(),
    genre: Joi.string().required(),
    recommend: Joi.boolean().required(),
});
export default musicSchema;