import React from 'react';
import '../components/Downloadcss.css';
import as from '../images/as.png';
import rs from '../images/rs.ico';


export default function Download() {
    return (
        <div>
            <div className='part1'>
                <h1 style={{ color: 'white' }}><u>Astrophotography <span style={{ color: 'orange' }}>Softwares</span></u></h1>
            </div>
            <div className='part2download'>
                <div className='autostakkert text-wrap'>
                    <img src={as} alt=".." style={{ height: '100px', width: '100px' }} />
                    <p>AutoStakkert! (AS!3 or AS!2) is a popular image stacking software used in astrophotography,
                        specifically for processing planetary and lunar images. Developed by Emil Kraaikamp, it is
                        widely regarded as one of the best tools for aligning and stacking multiple frames of celestial
                        objects.The software uses advanced algorithms to analyze and align thousands of individual
                        frames taken during planetary imaging sessions. By aligning the frames precisely,
                        it minimizes the effects of atmospheric turbulence and tracking errors, resulting
                        in a sharper and clearer composite image.AutoStakkert! offers various alignment and
                        stacking methods, including the powerful "Drizzle" method, which increases the
                        final image resolution by combining sub-pixel information from multiple frames.Due
                        to its efficiency and accuracy, AutoStakkert! has become a go-to tool for planetary
                        astrophotographers, helping them produce stunning images of planets and the Moon by
                        extracting the best details from their video or image sequences.</p>

                    <button className="btn-primary"onClick={() => window.location.href = 'https://www.autostakkert.com/wp/download/'}>
                        Download AutoStakkert
                    </button>
                    <p className='partition my-2' style={{ width: '100%', height: '0.5vh', backgroundColor: 'orange' }}></p>
                </div>
                <div className='pipp text-wrap'>
                    <p>PIPP (Planetary Imaging PreProcessor) is a popular software tool used in astrophotography for processing
                        planetary and lunar images. Developed by Christian Buil, PIPP is designed to prepare raw video footage
                        captured by astronomy cameras for further processing. It offers various essential pre-processing
                        functions, such as cropping, aligning, and converting video formats, as well as applying color
                        enhancement and quality improvement techniques. By efficiently handling large volumes of video
                        data and optimizing image frames, PIPP helps astrophotographers extract the best possible details
                        from their planetary and lunar imaging sessions. Its user-friendly interface and powerful features
                        make it a valuable tool for amateur and professional astronomers alike.</p>

                    <button className="btn-primary" onClick={() => window.location.href = 'https://pipp.software.informer.com/download/'}>
                        Download PIPP
                    </button>
                    <p className='partition my-2' style={{ width: '100%', height: '0.5vh', backgroundColor: 'orange' }}></p>
                </div>
                <div className='registax text-wrap'>
                <img src={rs} alt=".." style={{ height: '100px', width: '100px' }} />
                    <p>RegiStax is a widely used software tool in astrophotography for processing and enhancing planetary and lunar images. Developed by Cor Berrevoets, it offers advanced image stacking and alignment algorithms, allowing users to combine and align multiple frames to create high-quality composite images. The software also includes various post-processing features, such as wavelet sharpening and noise reduction, which help reveal finer details in the captured images. RegiStax's intuitive interface and powerful image processing capabilities make it a popular choice among astronomers for improving the quality and clarity of their planetary and lunar photographs.</p>

                    <button className="btn-primary" onClick={() => window.location.href = 'https://www.astronomie.be/registax/download.html'}>
                        Download RegiStax
                    </button>
                    <br/><br/>
                </div>
            </div>
        </div>
    );
}
