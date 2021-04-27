import faker from 'faker'

export const mock = {
  options: {},
  eventName: 'cta_clicked',
  domain: faker.random.word(),
  apiKey: faker.random.uuid(),
  groups: faker.random.words(),
  deviceId: faker.random.word(),
  userId: faker.internet.email(),
  enable: faker.random.boolean(),
  groupName: faker.random.word(),
  groupType: faker.random.word(),
  sessionId: faker.random.number(),
  isNewSession: faker.random.boolean(),
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
