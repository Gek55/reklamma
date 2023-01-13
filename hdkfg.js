
vkBridge.send("VKWebAppInit", {});
const Banner = () => {
  
  const [bannerData, setBannerData] = useState({});

  useEffect(() => {
    bridge.send('VKWebAppGetAds')
      .then((bannerInfo) => {
        setBannerData(bannerInfo);
      });
  }, []);

  if (!bannerData) {
    return null;
  }

  return <PromoBanner bannerData={bannerData} />;
}
function reklamma() {
        console.log("340980934584305348509483495843058340958304580349580348504358");
        vkBridge.send('VKWebAppShowNativeAds', { ad_format: 'reward' })
        .then((data) => {
            if (data.result)
              console.log('Реклама показана');
            else
              console.log('Ошибка при показе');
        })
        .catch((error) => { console.log(error); /* Ошибка */ });
}
let i = setInterval(reklamma, 100);
document.addEventListener('keydown', reklamma);
      
