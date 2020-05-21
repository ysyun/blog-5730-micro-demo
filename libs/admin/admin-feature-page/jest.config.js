module.exports = {
    name: 'admin-admin-feature-page',
    preset: '../../../jest.config.js',
    coverageDirectory: '../../../coverage/libs/admin/admin-feature-page',
    snapshotSerializers: [
        'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
        'jest-preset-angular/build/AngularSnapshotSerializer.js',
        'jest-preset-angular/build/HTMLCommentSerializer.js',
    ],
};
