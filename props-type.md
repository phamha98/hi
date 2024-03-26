```js
/**
 * @typedef {import('mongoose').Document} MongooseDocument
 * @typedef {import('mongoose').Model<any>} MongooseModel
 * @typedef {MongooseModel & typeof import('mongoose')} MongooseStaticModel
 * @typedef {MongooseDocument & { title: string, description: string, published: boolean }} GroupModel
 */

/**
 * Creates a group model.
 * @param {import('mongoose').Mongoose} mongoose - Mongoose instance.
 * @returns {MongooseModel}
 */
module.exports = mongoose => {
    var schema = mongoose.Schema(
        {
            title: String,
            description: String,
            published: Boolean
        },
        { timestamps: true }
    );

    schema.method("toJSON", function () {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

    const group = mongoose.model("group", schema);
    return group;
};

const Accordion = React.lazy(() => import('./views/base/accordion/Accordion'))
const Breadcrumbs = React.lazy(() => import('./views/base/breadcrumbs/Breadcrumbs'))

function checkIfUpdateNeeded(
  currentVersion,
  latestVersion,
  option,
  providerStoreUrl
) {
   
  return Promise.resolve(response);
}

```
 