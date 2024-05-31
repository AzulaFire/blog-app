import { SocialIcon } from 'react-social-icons';

const Socials = () => {
  return (
    <div className='flex lg:flex-col lg:mx-0 flex-row mx-auto'>
      <SocialIcon
        className='my-2 mx-2'
        network='instagram'
        url='https://www.instagram.com/azulafiredesigns/'
        target='_blank'
      />
      <SocialIcon
        className='my-2 mx-2'
        network='github'
        url='https://github.com/AzulaFire'
        target='_blank'
      />
      <SocialIcon
        className='my-2 mx-2'
        network='x'
        url='https://x.com/_azulafire'
        target='_blank'
      />
      <SocialIcon
        className='my-2 mx-2'
        network='linkedin'
        url='https://www.linkedin.com/in/johnhornjr/'
        target='_blank'
      />
      <SocialIcon
        className='my-2 mx-2'
        bgColor='#00bf00'
        network='linktree'
        url='https://linktr.ee/azulafire'
        target='_blank'
      />
    </div>
  );
};
export default Socials;
