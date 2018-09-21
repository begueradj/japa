/**
 * @module Core
 */

export enum IEvents {
  TESTSTARTED = 'test:started',
  TESTCOMPLETED = 'test:completed',
  GROUPSTARTED = 'group:started',
  GROUPCOMPLETED = 'group:completed',
  STARTED = 'started',
  COMPLETED = 'completed',
}

export type IOptions = {
  bail: boolean,
  timeout: number,
}

export type ITestOptions = {
  timeout: number,
  regression: boolean,
  skip?: boolean,
  skipInCI?: boolean,
  runInCI?: boolean,
}

export enum IGroupStatus {
  FAILED = 'failed',
  PASSED = 'passed',
  PENDING = 'pending',
}

export enum ITestStatus {
  FAILED = 'failed',
  PASSED = 'passed',
  SKIPPED = 'skipped',
  TODO = 'todo',
  PENDING = 'pending',
}

export type ITestReport = {
  title: string,
  status: ITestStatus,
  regression: boolean,
  regressionMessage: string,
  duration: number,
  error: Error | null,
}

export type IGroupReport = {
  title: string,
  status: IGroupStatus,
  error: Error | null,
}

export type IReport = {
  regressionCount: number,
  passedCount: number,
  skippedCount: number,
  failedCount: number,
  total: number,
  todoCount: number,
  groups: {
    title: string,
    failedTests: { title: string, error: Error }[],
    failedHooks: { title: string, error: Error }[],
  }[],
  duration: number,
}

export type IConfigureOptions = {
  bail: boolean,
  timeout: number,
  files: string[] | string,
  reporterFn: (emitter) => void,
  filter: (file: string) => void,
}

export type ICallback <T extends any[]> = (...args: T) => Promise<void> | void
export type IResolver <T> = (done: Function, postRun?: Function) => T
