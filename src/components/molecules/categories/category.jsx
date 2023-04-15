import { CategoryItemWrapper, Card } from "./styles";

export function Category({category}) {
    const { name, icon} = category;
  return <CategoryItemWrapper>
    <Card>
        {icon}
    </Card>
    {name}
    </CategoryItemWrapper>;
}

export default Category;
