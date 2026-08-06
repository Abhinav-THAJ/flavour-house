export const WP_API_URL = process.env.WC_STORE_URL ? `${process.env.WC_STORE_URL}/wp-json/wp/v2` : "";

export async function getHomePageData() {
  if (!WP_API_URL) return null;
  
  try {
    // Fetch page with slug 'home' to get its ACF fields
    const res = await fetch(`${WP_API_URL}/pages?slug=home&_fields=id,title,acf`, { 
      next: { revalidate: 60 } // Revalidate every 60 seconds
    });
    
    if (!res.ok) return null;
    
    const pages = await res.json();
    if (pages && pages.length > 0) {
      return pages[0].acf || null;
    }
    return null;
  } catch (error) {
    console.error("Failed to fetch home page data from WP:", error);
    return null;
  }
}
