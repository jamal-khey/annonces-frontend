
export interface Ad {
  user: string,
  status: {
    isApproved: boolean
    isPublished: boolean
    isFeatured: boolean
    isActive: boolean
  }
  adTitle: string
  slug: string
  category: string
  location: string
  tags: [string]
  itemCondition: string
  itemWarranty: string
  adType: string
  description: string
  specifications: [string]
  priceDetails: {
    currency: string
    priceType: string
    price: number
  }
  adGallery: [
    {
      url: string
      public_id: string
    }
  ]
  personalInfo: {
    fullName: string
    email: string
    phone: string
    location: string
  }
  specialNote: string
  adsReport: [
    {
      user: string
      reason: string
    }
  ]
  createdAt: Date
  updatedAt: Date
  expireAt: Date
}
