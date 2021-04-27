# Tracker Service
Tracking service to map user interactions using the [Amplitude](https://github.com/amplitude/Amplitude-JavaScript) library.

#### Development aid tool
Amplitude Chrome Extension [here.](https://chrome.google.com/webstore/detail/amplitude-event-explorer/acehfjhnmhbmgkedjmjlobpgdicnhkbp)

### Installation

```bash
yarn add @felipelealdefaria/tracker-service
# or
npm i @felipelealdefaria/tracker-service
```

### Usage

```typescript
import track from '@felipelealdefaria/tracker-service'
```

**1) Initialize:**

This is required before any other methods can be called.

```typescript
track.init(params: InitParams): { success?: boolean | error?: boolean }
```

```bash
InitParams:
- apiKey: string
- userId?: string
- options?: {}
- callback?: () => unknown
```

[See more options here.](https://amplitude.github.io/Amplitude-JavaScript/Options/)

**2) Log Event:**

Log event in [Amplitude Dashboard](https://amplitude.com/).

```typescript
track.log(params: LogParams): { success?: boolean | error?: boolean }
```

```bash
LogParams:
- eventName: string
- eventProperties?: {}
- timestamp?: number
- callback?: () => unknown
```

**3) Set User Identification:**

Identify current user:

```typescript
track.setUserId(userId: string): { success?: boolean | error?: boolean }
```

**4) Set User Properties:**

Identify current user properties:

```typescript
track.setUserProperties(userId: string): { success?: boolean | error?: boolean }
```

**5) Get Session Id:**

Get current session id:

```typescript
track.getSessionId(): { (success?: boolean | error?: boolean), sessionId: number | null }
```

**6) New Session:**

Verify if new session was created:

```typescript
track.isNewSession(): { (success?: boolean | error?: boolean), isNewSession: boolean | null }
```

**7) Clear User Properties:**

Clear current user properties:

```typescript
track.clearUserProperties(): { success?: boolean | error?: boolean }
```

**8) Set Domain:**

Sets a customer domain for the amplitude cookie. Useful if you want to support cross-subdomain tracking.

```typescript
track.setDomain(domain: string): { success?: boolean | error?: boolean }
```

**9) Set Track Off:**

Sets whether to opt current user out of tracking.

```typescript
track.setTrackOff(enable: boolean): { success?: boolean | error?: boolean }
```

**10) Set Device Id:**

Sets a custom deviceId for current user. Note: this is not recommended unless you know what you are doing (like if you have your own system for managing deviceIds). Make sure the deviceId you set is sufficiently unique (we recommend something like a UUID - see src/uuid.js for an example of how to generate) to prevent conflicts with other devices in our system.

```typescript
track.setDeviceId(deviceId: string): { success?: boolean | error?: boolean }
```

**11) Set Group:**

Add user to a group or groups. You need to specify a groupType and groupName(s).

For example you can group people by their organization. In that case, groupType is "orgId" and groupName would be the actual ID(s). groupName can be a string or an array of strings to indicate a user in multiple gruups. You can also call setGroup multiple times with different groupTypes to track multiple types of groups (up to 5 per app).

```typescript
track.setGroup(params: GroupParams): { success?: boolean | error?: boolean }
```

```bash
GroupParams:
- groupType: string
- groupName: string | string[]
```

**12) Log Group:**

Log an event with eventType, eventProperties, and groups. Use this to set event-level groups. Note: the group(s) set only apply for the specific event type being logged and does not persist on the user (unless you explicitly set it with setGroup).

```typescript
track.logGroup(params: LogGroupParams): { success?: boolean | error?: boolean }
```

```bash
LogGroupParams:
- eventName: string
- eventProperties?: {}
- group?: {}
- callback?: () => unknown
```

### Service's Architecture

Service created using the principles of Clean Architecture with the intention of facilitating maintenance and a possible exchange of lib used to trackers.

![image](https://user-images.githubusercontent.com/64376829/109692039-d11ab080-7b66-11eb-9d61-17c990234bde.png)

