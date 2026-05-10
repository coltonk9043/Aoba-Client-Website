import { MetadataRoute } from 'next'
import { Hacks } from './hacks'
import { SITE_URL } from '@/lib/constants'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const hackEntries: MetadataRoute.Sitemap = Hacks.map((h) => ({
    url: `${SITE_URL}/wiki/hacks/${h.name.toLowerCase()}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.5,
  }))

  return [
    { url: `${SITE_URL}/`, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${SITE_URL}/download`, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${SITE_URL}/wiki`, lastModified: now, changeFrequency: 'weekly', priority: 0.6 },
    { url: `${SITE_URL}/wiki/basics/addons`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${SITE_URL}/wiki/basics/altmanager`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${SITE_URL}/wiki/basics/bugs`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${SITE_URL}/wiki/basics/clickgui`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${SITE_URL}/wiki/basics/commands`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${SITE_URL}/wiki/basics/macros`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${SITE_URL}/wiki/basics/modules`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    ...hackEntries,
  ]
}
