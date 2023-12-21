import './Docs.css'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import SeriesImage from '../../image/series.png';
import OptionsImage from '../../image/options.png';
import ChartImage from '../../image/options-chart.png';
import ZoomImage from '../../image/options-zoom.png';
import StrokeSyntax from '../../image/stroke-syntax.png';

function Docs() {
  return (
    <div className='Docs container'>
        {/***** apexcharts install *****/}
        <section className='apexchartInstall'>
            <h1>Apexcharts Install</h1>
            <div className='textCopySec' style={{width:"250px"}}>
                <div className='copyText'>npm i react-apexcharts</div>
                <CopyToClipboard text={"npm i react-apexcharts"}>
                <div className='copyTextBtn'><i class="uil uil-copy-alt"></i></div>
                </CopyToClipboard>
            </div>
        </section>
        {/***** apexcharts install *****/}
        <section>
            <h2>Apexcharts import</h2>
            <div className='textCopySec' style={{width:"450px"}}>
                <div className='copyText'>import ReactApexChart from 'react-apexcharts'</div>
                <CopyToClipboard text={`import ReactApexChart from 'react-apexcharts'`}>
                <div className='copyTextBtn'><i class="uil uil-copy-alt"></i></div>
                </CopyToClipboard>
            </div>
        </section>
        {/***** apexcharts syntax *****/}
        <section>
            <h2>Apexcharts syntax</h2>
            <div className='textCopySec' style={{width:"730px"}}>
                <div className='copyText'>&lt;ReactApexChart options&#61;&#123;options&#125; series&#61;&#123;series&#125; width&#61;"100%" height&#61;"100%"&#47;&gt;</div>
                <CopyToClipboard text={`<ReactApexChart options={options} series={series} width="100%" height="100%"/>`}>
                <div className='copyTextBtn'><i class="uil uil-copy-alt"></i></div>
                </CopyToClipboard>
            </div><br />
            <p>Apexcharts के अंदर प्रमुख 4 props दाले जाते है |</p>
            <ul>
                <li><span>&#9679;</span><span>options</span></li>
                <li><span>&#9679;</span><span>series</span></li>
                <li><span>&#9679;</span><span>width</span></li>
                <li><span>&#9679;</span><span>height</span></li>
            </ul>
        </section>
        {/***** series *****/}
        <section>
            <h3>Series</h3>
            <img src={SeriesImage} alt="seriesImage" />
            <p>Series को array के form मे लिखा जाता है | जितना डाटा का graph print करवाना हो उतना series के array के अंदर object के form मे डाटा डाला लिखा जाता है |</p>
        </section>
        {/***** options *****/}
        <section>
            <h3>Options</h3>
            <img src={OptionsImage} alt="optionsImage" />
            <p>Options को object के form मे लिखा जाता है | इसके अंदर key: value के form मे बहुत सारे graph के अलग - अलग property होते है |</p>
        </section>
        <div style={{marginLeft:"100px"}}>
            {/* chart */}
            <section>
                <h3>Chart</h3>
                <img src={ChartImage} alt="chartImage" />
                <p>इसके अंदर type मे chart का प्रकार लिखा जाता है |<br />zoom मे true/false के द्वारा बताया जाता है की graph मे जो zoom के function के लिए जितना भी icon आता है वो दिखेगा की नहीं |</p>
                <img src={ZoomImage} alt="zoomImage" />
            </section>
            {/* stroke */}
            <section>
            <h3>Stroke</h3>
            <img src={StrokeSyntax} alt="strokeSyntax" />
            </section>
        </div>
    </div>
  )
}

export default Docs
