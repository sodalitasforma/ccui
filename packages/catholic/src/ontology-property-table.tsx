import type { ComponentPropsWithoutRef } from "react";
import {
  Badge,
  Table,
  TableWrapper,
  TBody,
  TD,
  TH,
  THead,
  TR,
  Text,
} from "../../primitives/src";
import { cx } from "../../primitives/src/utils";
import type { OntologyPropertyData } from "./types";

type OntologyPropertyTableProps = {
  properties: readonly OntologyPropertyData[];
} & ComponentPropsWithoutRef<"div">;

export function OntologyPropertyTable({
  properties,
  className,
  ...props
}: OntologyPropertyTableProps) {
  return (
    <div className={cx("ccui-ontology-property-table", className)} {...props}>
      <TableWrapper>
        <Table>
          <THead>
            <TR>
              <TH>Property</TH>
              <TH>Expected type</TH>
              <TH>Required</TH>
              <TH>Description</TH>
            </TR>
          </THead>
          <TBody>
            {properties.map((property) => (
              <TR key={property.property}>
                <TD>
                  <Text as="code" className="ccui-ontology-property-table__code">
                    {property.property}
                  </Text>
                </TD>
                <TD>{property.expectedType ?? "—"}</TD>
                <TD>
                  <Badge variant={property.required ? "gold" : "neutral"}>
                    {property.required ? "Required" : "Optional"}
                  </Badge>
                </TD>
                <TD>{property.description ?? "—"}</TD>
              </TR>
            ))}
          </TBody>
        </Table>
      </TableWrapper>
    </div>
  );
}
