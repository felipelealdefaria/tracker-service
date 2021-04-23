import faker from 'faker'

export const mock = {
  options: {},
  eventName: 'cta_clicked',
  apiKey: faker.random.uuid(),
  userId: faker.internet.email(),
  callback: jest.fn(() => alert('called event')),

  eventProperties: {
    step_name: faker.random.word(),
    page_title: faker.random.word(),
    product_name: faker.random.word()
  },
  userProperties: {
    user_name: faker.name.firstName(),
    user_city: faker.address.city()
  }
}
