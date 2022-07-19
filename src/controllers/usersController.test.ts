describe('Users Controller', () => {
  it('deve somar 1+1', () => {
    const sum = (a:number, b: number):number => a+b // Arrange
    const result = sum(1,1) // Act     
    expect(result).toBe(2) // Assert
  })
})
