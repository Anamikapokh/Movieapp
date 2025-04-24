import React from 'react';
import '../index.css';
import { Typography } from 'antd';

const { Paragraph} = Typography;

const About = () => {
//   const [ellipsis, setEllipsis] = useState(true);

  return (
    <>
      {/* <Switch
        checked={ellipsis}
        onChange={() => {
          setEllipsis(!ellipsis);
        }}
      /> */}
    <div  style={{marginLeft:-90,marginTop:75}}>
      <Paragraph >
      <b>Style That Speaks for You.</b><br></br><br></br>

Welcome to Shoppable — Shoppable eCommerce blurs the lines between content and commerce, allowing consumers to buy products directly from the content they’re already engaging with. Instead of simply showcasing products in ads, videos, or social media posts, brands now embed purchase functionality directly within the experience — reducing the steps from inspiration to transaction.

Think Instagram posts with built-in product tags, YouTube videos with clickable links, or livestreams where viewers can buy in real-time. It's all about meeting the customer where they are, reducing friction, and capitalizing on the impulse to buy.

For brands, this means higher conversion rates, better data on what content drives sales, and more personalized customer journeys. For consumers, it’s instant gratification — see it, love it, buy it — all without leaving the platform.

As attention spans shrink and digital experiences evolve, shoppable eCommerce isn’t just a trend — it’s the new standard.
<b>Our Story</b><br></br>
Born from a passion for design and a frustration with fast fashion, ClothWear was founded in 2025 with a simple goal: to bring high-quality, statement-making pieces to people who want to stand out, not blend in. Whether you're dressing for the everyday or a one-of-a-kind moment, our collections are made to help you feel like your best self — every single day.
<br></br>
<b>What We Stand For</b>
<pre>Quality First: Every piece we create is crafted with care, using premium fabrics and ethical production methods.

Authentic Style: We design clothing that reflects real people and real lifestyles. No fluff — just fashion that feels right.

Community Vibes: You’re not just a customer, you’re part of the fam. We listen, we learn, and we evolve with you.</pre>

<b>What You’ll Find Here</b><br></br>
From laid-back essentials to bold statement pieces, our curated collections are made to mix, match, and make your wardrobe work harder. With new arrivals dropping regularly, we’re here to keep your closet as fresh as your mindset.

Thank you for being here.
Explore. Express. Elevate.
#WearItYourWay
      </Paragraph>

    </div>
      
    </>
  );
};

export default About;