// 定高虚拟列表 Prop
export type FixedVLItemType = string | number

export interface FixedVLProps {
  data: FixedVLItemType[]
  itemHeight?: number
}

// 不定高虚拟列表 Prop
// export interface DynamicVLDataType {
//   id: number
//   title: string
//   content: string
// }

// export interface DynamicVLItem {
//   data: DynamicVLDataType
//   arrPos: number
//   top: number
//   bottom: number
//   height: number
// }

// export interface DynamicVLProps {
//   data: DynamicVLDataType[]
//   cacheCount?: number
//   estimatedItemHeight?: number
// }
