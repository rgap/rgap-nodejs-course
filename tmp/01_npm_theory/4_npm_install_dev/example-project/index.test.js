test('dummy test to demonstrate jest devDependency execution', () => {
  const message = 'production dependency works';
  expect(message).toContain('production');
});
