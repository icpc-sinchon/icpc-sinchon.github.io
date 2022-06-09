export async function getServerSideProps(context) {
  return {
    redirect: {
      destination: "/hall-of-fame",
      permanent: false,
    },
  };
}
export default function HallOfFamePage() {
  return <div />;
}
