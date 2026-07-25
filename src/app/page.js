import Image from "next/image";

export default function Home() {
  return (
    <>
      <h1>Welcome to the Products Store</h1>
      <Image src="/images/img.png" width={500} height={500}></Image>
    </>
  );
}
