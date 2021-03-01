import { type } from 'os'
import 'styled-components'
import darkTheme from './dark.theme'
import lightTheme from './dark.theme'


export type Theme = typeof darkTheme;
export type Theme = typeof lightTheme;

declare module 'styled-components'{
  export interface DefaultTheme extends Theme {}
}