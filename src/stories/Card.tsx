import { 
  Card as KendoCard,  
  CardHeader,
  CardTitle,
  CardBody,
  CardActions,
  CardImage,
  CardSubtitle } from "@progress/kendo-react-layout";

  import { Button } from "@progress/kendo-react-buttons";

export interface CardProps {
  orientation?: 'horizontal' | 'vertical'; 
  dir?: 'ltr' | 'rtl' | 'auto'; 
  type?: 'default' | 'primary' | 'info' | 'success' | 'warning' | 'error';
  style?: any; 
}

/** Primary UI component for user interaction */
export const Card = ({
  ...props
}: CardProps) => {
  return (
    <KendoCard {...props}>
        <CardImage src="https://store-images.s-microsoft.com/image/apps.29972.14474337564596307.6c783b22-9460-4205-938c-2969961ed85c.aa21aff2-b2b2-411b-88bb-158187c6e238?mode=scale&q=90&h=1080&w=1920" />
          <CardHeader>
            <CardTitle>Coffee with friends</CardTitle>
            <CardSubtitle>An example card layout</CardSubtitle>
          </CardHeader>
          <CardBody>
            <p>
              The right place to be if you're in love with high quality
              espresso or tea. We offer wide range to top coffee brands as
              Davidoff Cafe, Lavazza, Tchibo, Illy.
            </p>
          </CardBody>
           <CardActions>
              <Button themeColor={'primary'}>
                  Add
              </Button>
              <Button>
                  Decline
              </Button>
          </CardActions>
    </KendoCard>
  );
};
