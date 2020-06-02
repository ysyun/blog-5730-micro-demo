module.exports = {
    name: 'manuallazy',
    preset: '../../jest.config.js',
    coverageDirectory: '../../coverage/libs/manuallazy',
    snapshotSerializers: [
        'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
        'jest-preset-angular/build/AngularSnapshotSerializer.js',
        'jest-preset-angular/build/HTMLCommentSerializer.js',
    ],
};
