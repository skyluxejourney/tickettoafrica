"use client";

import { BRAND } from "@/app/constants";

export default function WhyPayMoreSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20" style={{ backgroundColor: '#f5f8f3' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Heading - Top Left */}
          <div className="mb-6 sm:mb-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight" style={{ color: '#1a330d' }}>
              Why Pay More?{" "}
              <span 
                className="text-transparent bg-clip-text"
                style={{
                  background: `linear-gradient(to right, #274e13, #468f21)`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                Fly Cheap
              </span>{" "}
              with {BRAND.name}
            </h2>
            <div 
              className="w-16 h-1 rounded-full mt-3"
              style={{
                background: `linear-gradient(to right, #274e13, #ffffff)`
              }}
            />
          </div>

          {/* Content - Full Width */}
          <div className="space-y-4 sm:space-y-5 text-sm sm:text-base leading-relaxed" style={{ color: '#1a330dCC' }}>
            <p>
              Traveling is fun until it comes to online flight ticket booking. 
              Finding the best deal on domestic and international flights is 
              now easy with {BRAND.name}. It is one of the leading travel 
              agencies based in the USA.
            </p>

            <p>
              Whether you are planning a family vacation, solo trip, 
              honeymoon trip, or friend's trip, {BRAND.name} helps you get 
              cheap flight tickets. From budget traveling to luxury traveling, 
              we have everything you need for your comfortable journey.
            </p>

            <p>
              With our premium flight booking services, you can book your 
              roundtrip or one-way air tickets in just a few minutes. If you 
              want to save your money on flight bookings, make sure you book 
              your all flight tickets with {BRAND.name}.
            </p>

            <p>
              We have been in business for the last 5 years and understand 
              each of your travel needs. We are working with 600+ airlines to 
              provide you with the best price for your flight booking. With 
              our lowest airfares, save a huge amount of money and invest it 
              in your next flight booking.
            </p>

            <p>
              If you're planning to explore the new city as per your travel 
              bucket list, we are here to help in make the best travel 
              arrangements. We have a team of dedicated travel experts who are 
              always ready to help you in choosing the best deals.
            </p>

            <p>
              We take pride in offering the cheapest flight tickets in the USA 
              for both domestic and international flights. Our website 
              interface is user-friendly and easy to use through which you can 
              easily book your flights. Even we offer the best last-minute 
              deals which makes us different from other travel agencies in the 
              USA.
            </p>

            <p className="font-semibold text-base sm:text-lg pt-2" style={{ color: '#1a330d' }}>
              When you're getting guaranteed cheap flight tickets at {BRAND.name}, 
              why are you delaying your exploration? Explore the world at 
              minimal cost. This world is waiting for you. Go grab the best 
              deals and save your hard-earned money.
            </p>
          </div>
        </div>
      </div>

      {/* Full Width Image - Updated with a more relevant booking theme */}
      <div className="w-full mt-8 sm:mt-10 lg:mt-12">
        <div className="overflow-hidden relative">
          <img
            src="/images/bookflight.png"
            alt={`Book your next flight with ${BRAND.name} - domestic and international travel`}
            className="w-full h-auto object-cover"
          />
          {/* Subtle Green Overlay */}
          <div className="absolute inset-0" style={{
            background: `linear-gradient(to right, #274e1322, transparent 50%, #274e1322)`
          }} />
        </div>
      </div>
    </section>
  );
}