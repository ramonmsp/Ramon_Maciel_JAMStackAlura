import React, { useMemo } from 'react';

const FooterIcon = ({ type }) => {
  const twitterIcon = (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 0C12.8355 0 9.74202 0.938384 7.11084 2.69649C4.47965 4.45459 2.42889 6.95345 1.21789 9.87706C0.00688675 12.8007 -0.309967 16.0177 0.307397 19.1214C0.92476 22.2251 2.44861 25.0761 4.68625 27.3137C6.92389 29.5513 9.77482 31.0752 12.8785 31.6926C15.9822 32.3099 19.1993 31.9931 22.1229 30.7821C25.0465 29.5711 27.5454 27.5203 29.3035 24.8891C31.0616 22.2579 32 19.1645 32 16C31.9949 11.7581 30.3075 7.69138 27.3081 4.6919C24.3086 1.69242 20.2419 0.00508114 16 0V0ZM23.1408 12.3392C23.1408 12.4992 23.1408 12.6592 23.1408 12.8192C23.1408 17.6848 19.4384 23.2944 12.6624 23.2944C10.6628 23.2959 8.70515 22.721 7.02396 21.6384C7.3155 21.673 7.60879 21.6906 7.90236 21.6912C9.56188 21.6946 11.1743 21.1395 12.48 20.1152C11.7115 20.1 10.9671 19.845 10.3506 19.3861C9.73415 18.9271 9.27648 18.287 9.04156 17.5552C9.26916 17.6005 9.5007 17.623 9.73276 17.6224C10.0604 17.6235 10.3866 17.5799 10.7024 17.4928C9.86823 17.326 9.11764 16.8754 8.57827 16.2176C8.03891 15.5598 7.74409 14.7354 7.74396 13.8848C7.74237 13.8688 7.74237 13.8528 7.74396 13.8368C8.25534 14.1215 8.82771 14.279 9.41276 14.296C8.63186 13.7766 8.07875 12.9786 7.86642 12.065C7.6541 11.1515 7.79858 10.1914 8.27036 9.3808C9.19505 10.5189 10.3489 11.4497 11.6569 12.1127C12.9649 12.7756 14.3978 13.1559 15.8624 13.2288C15.7991 12.9533 15.7675 12.6715 15.768 12.3888C15.7663 11.6495 15.9873 10.9269 16.4022 10.315C16.8171 9.70319 17.4067 9.23049 18.0941 8.95853C18.7816 8.68656 19.535 8.62794 20.2562 8.79031C20.9774 8.95267 21.633 9.32849 22.1376 9.8688C22.9644 9.7092 23.7571 9.40653 24.48 8.9744C24.2052 9.8286 23.6291 10.5537 22.8592 11.0144C23.5894 10.9291 24.3025 10.7339 24.9744 10.4352C24.4804 11.1732 23.8596 11.8178 23.1408 12.3392Z" fill="black" />
    </svg>
  );

  const githubIcon = (
    <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11 0.868774C5.40623 0.868774 0.868729 5.40627 0.868729 11C0.868729 15.4063 3.68123 19.15 7.60623 20.55C7.62498 20.5563 7.69373 20.5813 7.71248 20.5875C7.76873 20.6063 7.83123 20.6188 7.89373 20.6188C8.22498 20.6188 8.48748 20.35 8.48748 20.025C8.48748 20.0063 8.48748 19.9938 8.48748 19.975C8.48748 19.4375 8.48748 18.7563 8.48748 18.2125C7.84373 18.3438 6.86873 18.4688 6.33748 18.2125C5.64998 17.8813 5.29998 17.4563 4.96873 16.6188C4.55623 15.6 3.60623 15.3188 3.56873 15.1438C3.53123 14.9625 4.57498 14.6938 5.11248 15.3125C5.64998 15.9313 6.19373 17.1688 7.34998 17.05C7.91873 16.9938 8.28748 16.9 8.51873 16.8313C8.56248 16.4313 8.69373 15.9375 9.02498 15.5875C6.30623 15.1375 4.49373 13.675 4.49373 10.8063C4.49373 9.50002 4.86873 8.48752 5.53123 7.73127C5.41873 7.10627 5.23123 5.65627 5.73123 5.15002C5.73123 5.15002 6.43748 4.71252 8.46248 6.13752C9.21873 5.96252 10.0562 5.87502 10.95 5.87502C10.9687 5.87502 10.9812 5.87502 11 5.87502C11.0187 5.87502 11.0312 5.87502 11.05 5.87502C11.95 5.88127 12.7875 5.96877 13.5375 6.13752C15.5625 4.71252 16.2687 5.15002 16.2687 5.15002C16.7687 5.66252 16.5812 7.11252 16.4687 7.73127C17.1312 8.49377 17.5062 9.50627 17.5062 10.8063C17.5062 13.675 15.7 15.1375 12.975 15.5875C13.4937 16.1313 13.5125 17.0125 13.5125 17.375C13.5125 17.7188 13.5125 20.0188 13.5125 20.0313C13.5125 20.3625 13.7812 20.625 14.1062 20.625C14.1562 20.625 14.2 20.6188 14.25 20.6063C14.2625 20.6063 14.3 20.5938 14.3125 20.5875C18.2812 19.2125 21.1312 15.4438 21.1312 11.0063C21.1312 5.40003 16.5937 0.868774 11 0.868774Z" fill="white" />
    </svg>
  );

  const icon = useMemo(() => {
    if (type === 'github') {
      return githubIcon;
    }

    return twitterIcon;
  }, []);

  return (
    { icon }
  );
};

export default FooterIcon;