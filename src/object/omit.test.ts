import { omit } from './omit'

const user = {
  name: 'HELLO',
  age: 56,
  password: 'password',
  createdAt: new Date(),
}

describe('Function: omit', () => {
  it('should remove keys from object and leave others alone', () => {
    let result = omit(user, 'password')
    expect(result.password).toBeUndefined()
    expect(result.name).toBeDefined()
  })
})
