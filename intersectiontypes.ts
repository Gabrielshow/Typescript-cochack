//intersection types
interface errorhandling {
success: boolean;
error?: { message: string};
}

interface artworksdata {
artworks : {title: string} [];
}

interface artistsdata{
artists: { name: string} [];
}

type artworksresponse = artworksdata & errorhandling;
type artistsresponse = artistsdata & errorhandling;

const handleartistresponse =(response: artistsresponse) =>  {
if (response.error) { 
console.error(response.error.message);
return;
}
console.log(response.artists);}