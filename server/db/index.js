const mongoose = require('mongoose');
mongoose.Promise = Promise;
mongoose.connect(process.env.EDITOR_DB_CREDENTIALS || 'mongodb://localhost/xliff-editor');

const Schema = mongoose.Schema;

const SegmentSchema = new Schema({
    target: String,
    targetLang: String,
    source: { type: String, text: true },
    sourceHtml: String,
    sourceLang: String,
    status: Boolean,
    date: Date
});

SegmentSchema.index({ source: 'text' });
// db.collection.enshureIndex({field: value})

const Segment = mongoose.model('Segment', SegmentSchema);

module.exports = {
    Segment
};
