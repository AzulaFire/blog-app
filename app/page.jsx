import Gallery from './components/Gallery';

export default function Home() {
  const images = [
    {
      id: 1,
      image: 'https://www.azulafire.com/img/works/thumbnail/sm_web-7.jpg',
    },
    {
      id: 2,
      image: 'https://www.azulafire.com/img/works/thumbnail/sm_web-6.jpg',
    },
    {
      id: 3,
      image: 'https://www.azulafire.com/img/works/thumbnail/sm_web-5.jpg',
    },
    {
      id: 4,
      image: 'https://www.azulafire.com/img/works/thumbnail/sm_web-4.jpg',
    },
    {
      id: 5,
      image: 'https://www.azulafire.com/img/works/thumbnail/sm_web-3.jpg',
    },
    {
      id: 6,
      image: 'https://www.azulafire.com/img/works/thumbnail/sm_web-2.jpg',
    },
    {
      id: 7,
      image: 'https://www.azulafire.com/img/works/thumbnail/sm_web-1.jpg',
    },
    {
      id: 8,
      image: 'https://www.azulafire.com/img/works/thumbnail/sm_web-0.jpg',
    },
  ];

  return (
    <main className='text-center pt-16 px-5'>
      <h1 className='text-4xl md:text-5xl font-bold mb-10'>
        Welcome to CodeShutter
      </h1>
      <div className='px-4 mx-auto mb-4 text-justify'>
        <p>
          Welcome to CodeShutter, where pixels meet code, and creativity dances
          with logic!
        </p>

        <p>
          CodeShutter is your backstage pass to my exhilarating voyage through
          the ever-evolving landscape of modern web application development. As
          I wield my trusty tools—NextJS, React, and Python—I’ll unravel the
          secrets of elegant UIs, seamless interactions, and robust backends.
        </p>
        <p>
          But wait, there’s more! When the code editor takes a breather, I don
          my photographer’s hat. The shutter clicks, capturing fleeting moments,
          vibrant landscapes, and candid expressions. Expect photo diaries,
          visual storytelling, and perhaps a sprinkle of lens-flare magic.
        </p>
        <p>
          And when the moon rises, so does my gamer alter ego. From epic quests
          to pixelated victories, I’ll share my gaming escapades—because every
          developer needs a respawn point.
        </p>
        <p>
          So buckle up, fellow explorers! Whether you’re a seasoned dev or a
          curious newbie, CodeShutter promises a fusion of tech wizardry, visual
          delights, and a dash of whimsy. Let’s pixel-push our way to the
          future, one line of code at a time.
        </p>

        <p>
          Stay tuned for tutorials, musings, and the occasional eureka moment.
          Remember, the best stories unfold when code meets creativity. Ready?
          Set. CodeShutter!
        </p>
      </div>
      <div className='grid grid-cols-2 md:grid-cols-3 gap-10 py-12 px-8 border-t-2'>
        {images.map((image) => (
          <Gallery key={image.id} pic={image.image} />
        ))}
      </div>
    </main>
  );
}
