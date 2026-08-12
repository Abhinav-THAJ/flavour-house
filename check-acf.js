const WP_API_URL = "https://blueviolet-porpoise-268161.hostingersite.com/wp-json/wp/v2";

async function checkACF() {
  try {
    const res = await fetch(`${WP_API_URL}/pages?slug=about&_fields=id,title,acf&acf_format=standard`);
    const pages = await res.json();
    console.log(JSON.stringify(pages[0].acf, null, 2));
  } catch (err) {
    console.error(err);
  }
}

checkACF();
