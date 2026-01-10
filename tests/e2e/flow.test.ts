import { hello } from '../../src/index'

describe('Example E2E Tests', () => {
  describe('Full application flow', () => {
    it('should execute complete greeting flow', () => {
      // Arrange
      const names = ['Alice', 'Bob', 'Charlie']
      const expectedResults = [
        'Hello, Alice!',
        'Hello, Bob!',
        'Hello, Charlie!',
      ]

      // Act
      const results = names.map((name) => hello(name))

      // Assert
      expect(results).toEqual(expectedResults)
    })

    it('should handle batch processing', () => {
      const batchSize = 100
      const names = Array.from({ length: batchSize }, (_, i) => `User${i}`)

      const results = names.map((name) => hello(name))

      expect(results).toHaveLength(batchSize)
      results.forEach((result, index) => {
        expect(result).toBe(`Hello, User${index}!`)
      })
    })
  })
})
