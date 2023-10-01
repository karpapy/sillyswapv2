import Head from "next/head";
import { Box, Flex, Heading, Image, Img, Link } from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import createGlobe from "cobe";

export default function Home() {
  const canvasRef: any = useRef();
  useEffect(() => {
    if (!canvasRef.current) return;

    let phi = 0;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 600 * 2,
      height: 600 * 2,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.1, 0.8, 1],
      glowColor: [1, 1, 1],
      markers: [
        { location: [37.7595, -122.4367], size: 0.03 },
        { location: [40.7128, -74.006], size: 0.1 },
      ],
      onRender: (state) => {
        state.phi = phi;
        phi += 0.01;
      },
    });

    return () => {
      globe.destroy();
    };
  }, []);

  return (
    <>
      <Head>
        <title>Worlds coolest website</title>
        <meta name="description" content="A great website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Heading m={3}>sillyswap is the worlds silliest swapper</Heading>
        <canvas
          ref={canvasRef}
          style={{ width: 600, height: 600, maxWidth: "100%", aspectRatio: 1 }}
        />
        <Heading m={2}>
          no interface. no auto routing. you make LPs on chain.
        </Heading>
        <Flex flexWrap={"wrap"}>
          <Link
            href="https://basescan.org/address/0x05e2bc8601758eca0eaa47ef9b908e88ff07927e#code"
            border="6px solid black"
            m={1}
            pb={4}
            px={4}
          >
            <Image src="/armor.jpg" alt="skull" width="400px" height="500px" />
            <Heading fontFamily="mono" m={2}>
              you have a router
            </Heading>
          </Link>
          <Link
            href="https://basescan.org/address/0x32e219e92063bb6c2e473f5e718d3ba6fada4a44"
            border="6px solid black"
            m={1}
            pb={4}
            px={4}
          >
            <Image src="/dental.jpg" alt="skull" width="400px" height="500px" />
            <Heading fontFamily="mono" m={2}>
              you have a factory
            </Heading>
          </Link>
        </Flex>
        <Heading my={1}>venture forth and swap silly things</Heading>
      </Box>
    </>
  );
}
