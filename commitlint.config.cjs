module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2, // Level: 2 = error (block commit)
      'always',
      [
        'feat',
        'fix',
        'docs',
        'style',
        'refactor',
        'perf',
        'test',
        'chore',
        'revert',
        'build',
        'ci',
      ],
    ],
    'type-empty': [2, 'never'], // Type KHÔNG được để trống
    'subject-empty': [2, 'never'], // Subject KHÔNG được để trống
    'subject-case': [0], // Không bắt buộc lowercase
    'header-max-length': [2, 'always', 100], // Max 100 ký tự
  },
}
