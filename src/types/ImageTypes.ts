export interface ImageTypes {
    id: string
    likes: number
    urls: ImageUrls
    user: User
}

export interface ImageUrls {
    full: string
    raw: string
    regular: string
    small: string
    small_s3: string
    thumb: string
}

export interface User {
    first_name: string
    id: string
    instagram_username: string
    last_name: string | null
}