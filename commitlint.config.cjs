module.exports = {
  extends: ['@commitlint/config-conventional'],
  /*
    type(scope?): subject // 여기 전체를 header
    body?
    footer?
  */
  // 0=off, 1=warn, 2=error
  // always=allow, never=disallow
  rules: {
    // [0] = 규칙 해제
    'header-max-length': [0],
    'subject-case': [0],
    'subject-full-stop': [0],
    'subject-empty': [2, 'never'], // subject 생략 불가
    'type-case': [2, 'never'], // 대소문자 허용 불가
    'type-empty': [2, 'never'], // type 생략 불가
    'type-enum': [
      // 아래의 type만 사용 가능
      2,
      'always',
      ['feat', 'fix', 'docs', 'refactor', 'chore', 'style'],
    ],
  },
};
