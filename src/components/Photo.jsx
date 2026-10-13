import { useState } from 'react'
import { photos, wm } from '../data/photos'

// Gambar dari Wikimedia dengan fallback gradasi jika gagal dimuat
export default function Photo({ id, src, width = 960, alt, className = '', eager = false }) {
  const [failed, setFailed] = useState(false)
  const photo = id ? photos[id] : null
  const url = src || (photo ? wm(photo, width) : '')

  if (failed || !url) {
    return (
      <div className={`photo-fallback ${className}`} role="img" aria-label={alt || photo?.title}>
        <span>{alt || photo?.title}</span>
      </div>
    )
  }

  return (
    <img
      className={className}
      src={url}
      alt={alt || photo?.title || ''}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      onError={() => setFailed(true)}
    />
  )
}
