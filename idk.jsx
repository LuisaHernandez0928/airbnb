const Tab = () => {
  return <div>Hola Tab</div>;
};

const Card = () => {
  return <div>Hola Card</div>;
};

const TabBar = () => {
  return (
    <div>
      <Tab></Tab>
      <Tab></Tab>
      <Tab></Tab>
    </div>
  );
};

const CardContainer = () => {
  return (
    <div>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
    </div>
  );
};

const Parent = () => {
  return (
    <div>
      <TabBar></TabBar>
      <CardContainer></CardContainer>
    </div>
  );
};
