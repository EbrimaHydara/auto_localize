type ServicesElem = {
  networks: number[]
  plans: number[]
  services: number[]
}
type LocationElem = {
  address: string
  building_name: string
  city: string
  latitude: string
  longitude: string
  prefecture: string
  region: number
  zip_code: string
}
type AnnouncementInfoElem = {
  emblem_1: string
  emblem_2: string
  emblem_3: string
  free_text: string
  free_title: string
  publication_start_datetime: string
  publication_end_datetime?: string
  text_1: string
  text_2: string
  text_3: string
}
type BannerElem = {
  link_url_1: string
  link_url_2: string
  link_url_3: string
  url_1: string
  url_2: string
  url_3: string
}
type ContactElem = {
  fax: string
  phone: string
}
type HolidayElem = {
  end_time: string
  irregular_holiday_text: string
  open_time: string
  reception_text: string
  regular_holiday_text: string
  week_text: string
}
type ImageElem = {
  guide_map_url_text: string
  url_text_1: string
  url_text_2: string
  url_text_3: string
  url_text_4: string
  url_text_5: string
}
type TimingElem = {
  end_time: string
  open_time: string
  reception_time_text: string
  week_text: string
}
type ReservationElem = {
  air_wait_key: string
  link_url: string
  phone: string
  reception_time_text: string
  remark_text: string
}
export type ShopElement = {
  announcement_info: AnnouncementInfoElem
  banner_data: BannerElem
  code: string
  contact_info: ContactElem
  group_id: string
  holiday_timings: HolidayElem
  image_data: ImageElem
  location: LocationElem
  marketing_url_text: string
  name: string
  regular_timings: TimingElem
  reservation_info: ReservationElem
  short_name: string
  start_date: string
  supported_features: ServicesElem
  type: number
  url: string
}
export type ShopData = ShopElement[]
