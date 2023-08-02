export type Menu = {
  id: string
  name: string
  order: number
  category: Category[]
  iconUrl: string
}

export type Category = {
  id: string
  name: string
  subCategory: SubCategory[]
}

export type SubCategory = {
  id: string
  name: string
}

export type MenuResponse = {
  code: string
  message: string
  data: {
    contents: Menu[]
  }
}