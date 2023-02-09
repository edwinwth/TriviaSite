import { Col, Dropdown, Input, Row } from "@nextui-org/react";
import React, { Key, useEffect } from "react";
import { useCategory } from "../api/getCategory";
import { TriviaCategory } from "../types";

type SelectionType = "all" | Set<Key>;

interface TriviaSearchBarProps {
  onSearchChange: Function;
  onFilterChange: Function;
}

export const TriviaSearchBar: React.FC<TriviaSearchBarProps> = ({
  onSearchChange,
  onFilterChange,
}) => {
  const { data: catgories } = useCategory();
  const [selected, setSelected] = React.useState<SelectionType>(new Set(["all"]));
  const selectedValue = React.useMemo(
    () => Array.from(selected).join(", ").replaceAll("_", " "),
    [selected]
  );

  const getDropdownDisplayValue = () => {
    let name = catgories?.find((x) => x.id == selectedValue)?.category_name
    if (name)
      return name
    else
      return "All"
  }


  useEffect(() => {
    onFilterChange(selectedValue);
  }, [selectedValue]);

  return (
    <Row justify="center" css={{ marginTop: 50 }} gap={2}>
      <Col css={{ width: "auto" }}>
        <Dropdown>
          <Dropdown.Button flat>{getDropdownDisplayValue()}</Dropdown.Button>
          <Dropdown.Menu
            aria-label="Dynamic Actions"
            items={catgories}
            selectionMode="single"
            selectedKeys={selected}
            onSelectionChange={setSelected}
            
          >
            {(item) => {
              let dropdownItems = item as TriviaCategory;
              return (
                <Dropdown.Item
                  key={dropdownItems.id}
                >
                  {dropdownItems.category_name}
                </Dropdown.Item>
              );
            }}
          </Dropdown.Menu>
        </Dropdown>
      </Col>
      <Col css={{ width: "auto" }}>
        <Input
          labelPlaceholder="Search"
          clearable
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </Col>
    </Row>
  );
};
