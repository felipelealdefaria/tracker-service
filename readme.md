# Tracker Service
Tracking service to map user interactions using the [Amplitude](https://github.com/amplitude/Amplitude-JavaScript) library.

### Installation

```bash
yarn add @felipelealdefaria/tracker-service
# or
npm i @felipelealdefaria/tracker-service
```

### Usage

```typescript
import { track } from '@felipelealdefaria/tracker-service'
```

**1) Initialize:**

This is required before any other methods can be called.

```typescript
track.init(params: InitParams): Promise<void>
```

**InitParams:**
- apiKey: string
- userId?: string
- options?: {} // [see more here](https://amplitude.github.io/Amplitude-JavaScript/Options/)
- callback?: () => unknown

**2) Log Event:**

Log an event in [Amplitude Dashboard](https://amplitude.com/).

```typescript
track.log(params: LogParams): Promise<void>
```

**LogParams:**
- eventName: string
- eventProperties?: {}
- timestamp?: number
- callback?: () => unknown

### Service's Architecture

Service created using the principles of Clean Architecture with the intention of facilitating maintenance and a possible exchange of lib used to trackers.

![image](https://user-images.githubusercontent.com/64376829/109692039-d11ab080-7b66-11eb-9d61-17c990234bde.png)

