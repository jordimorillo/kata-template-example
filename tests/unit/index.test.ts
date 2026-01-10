import { hello } from '../../src/index'

describe('Example Unit Tests', () => {
  describe('hello function', () => {
    it('should return greeting message', () => {
      const result = hello('TypeScript')
      expect(result).toBe('Hello, TypeScript!')
    })

    it('should handle empty name', () => {
      const result = hello('')
      expect(result).toBe('Hello, !')
    })

    it('should handle special characters', () => {
      const result = hello('José')
      expect(result).toContain('José')
    })
  })
})
