
import './Gallery.css'

const amazingScientists = [
  { key: 1, imageUrl: "./images/albert-einstein.jpg", name: "Albert Einstein" },
  { key: 2, imageUrl: "./images/charles-darwin.jpg", name: "Charles Darwin" },
  { key: 3, imageUrl: "./images/isaac-newton.jpg", name: "Isaac Newton" },
  { key: 4, imageUrl: "./images/albert-einstein.jpg", name: "Albert Einstein" },
  { key: 5, imageUrl: "./images/charles-darwin.jpg", name: "Charles Darwin" },
  { key: 6, imageUrl: "./images/isaac-newton.jpg", name: "Isaac Newton" },
];
const imageWidth = 200;
const imageHeight = 220;

export function Gallery() {
  return (
    <div id="gallery">
      {displayProfiles()}
    </div>
  );
}

function displayProfiles() {
  const profiles = [];
  for (const scientist of amazingScientists) {
    profiles.push(
        <figure key={scientist.key}>
            <img  src={scientist.imageUrl} alt={scientist.name} width={imageWidth} 
              height={imageHeight} />
            <figcaption>{scientist.name}</figcaption>
        </figure>
    );
  }
  return profiles;
}
