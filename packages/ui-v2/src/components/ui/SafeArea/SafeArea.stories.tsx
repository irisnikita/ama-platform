// Libraries
import { Meta, StoryObj } from "@storybook/react";

// Components
import { SafeArea } from "./SaveArea";

const meta: Meta<typeof SafeArea> = {
  title: "Components/SafeArea",
  component: SafeArea,
  parameters: {
    docs: {
      description: {
        component: `
A component that adds a safe area to the bottom or top of the screen.`,
      },
    },
  },
  args: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: () => (
    <div>
      <div style={{ background: "#ace0ff" }}>
        <SafeArea position="top" />
      </div>
      <div>
        Est aliquip amet dolor nisi laborum adipisicing adipisicing deserunt do
        amet do culpa. Laborum eiusmod consequat dolore deserunt anim duis
        ullamco velit eu tempor minim. Pariatur aliqua fugiat commodo. Laborum
        est nulla voluptate sint officia anim quis laboris. Sit et non Lorem
        quis mollit quis. Enim ipsum sunt do esse est cillum est reprehenderit
        nisi voluptate consectetur elit magna irure. In elit sit irure mollit
        labore do mollit. Aliqua Lorem reprehenderit anim ex sunt nostrud Lorem.
        Ad irure nulla aute eiusmod duis ex magna laborum laborum ut fugiat sint
        proident. Proident nostrud nostrud consequat. Ipsum deserunt cupidatat
        ullamco cillum labore sunt minim eu. Sint nisi reprehenderit labore
        cupidatat quis qui excepteur in. Excepteur culpa qui sint proident
        commodo sit cupidatat aliqua ut qui occaecat. In ut laboris irure.
        Adipisicing incididunt ea ut proident id aliqua irure occaecat. Deserunt
        nulla tempor sit ipsum cillum elit ut reprehenderit id. Irure cupidatat
        mollit incididunt reprehenderit dolor consequat veniam anim incididunt
        non eiusmod enim et. Sunt do sit proident do ipsum sunt ipsum occaecat
        eu. Deserunt amet deserunt ad. Id enim veniam cillum dolore ut
        adipisicing excepteur elit nostrud sit. Magna aliquip qui veniam nostrud
        nisi sunt elit elit. Officia veniam duis nostrud eu ad aute laboris
        occaecat ullamco. Deserunt occaecat minim sit eiusmod non deserunt ea
        ullamco magna dolor nulla ipsum amet proident. Voluptate eiusmod esse
        sint proident labore eu excepteur exercitation minim aute esse anim ad
        est. Reprehenderit exercitation mollit et tempor. Nisi eiusmod
        incididunt occaecat quis amet. Ex cupidatat non duis aliquip labore enim
        veniam enim Lorem labore consequat consequat. Nisi consequat laboris
        occaecat dolore proident duis aliqua irure irure incididunt commodo ad.
        Minim duis deserunt tempor enim consectetur adipisicing excepteur ex
        nulla ex non sint anim. Cupidatat consequat deserunt nisi elit elit ea
        fugiat officia eiusmod id eiusmod quis nostrud consequat ut. Mollit elit
        anim officia irure eu reprehenderit irure do reprehenderit dolore.
        Aliquip dolore aute amet magna ipsum. Dolor id Lorem incididunt sit
        eiusmod enim non incididunt commodo proident reprehenderit ea. Esse
        mollit irure culpa officia reprehenderit ipsum do non est sunt nisi qui
        sit Lorem. Minim enim officia esse deserunt magna excepteur et ex.
        Eiusmod ea pariatur adipisicing consectetur sunt magna ea magna proident
        commodo est consectetur. Minim voluptate et laborum cupidatat irure
        ullamco laboris ullamco et officia eu voluptate in. Et cillum excepteur
        fugiat cupidatat. Reprehenderit ut sunt nisi do sint pariatur ad nulla
        ea incididunt id aliqua qui incididunt. Ex eiusmod mollit cillum
        reprehenderit nostrud dolor. Ipsum est cillum non. Enim occaecat quis
        excepteur ullamco. Incididunt culpa ut excepteur anim culpa voluptate
        nulla reprehenderit. Consectetur laborum occaecat excepteur consequat
        enim enim ea est et consectetur enim laborum non occaecat ad. Est ut est
        fugiat reprehenderit. Qui enim do ullamco ullamco nulla cupidatat
        pariatur. Nostrud qui nostrud qui sit veniam non commodo. Id nisi esse
        incididunt tempor fugiat excepteur Lorem id tempor et quis velit et
        magna. Sint magna dolor nulla. Cupidatat non eiusmod deserunt veniam ea.
        Anim labore tempor deserunt incididunt id. Id exercitation veniam
        consectetur. Culpa mollit non nostrud excepteur cupidatat proident id
        aute id occaecat. Adipisicing est et deserunt. Eiusmod velit nostrud est
        commodo in aliquip id anim sint officia. Quis nulla eu aliquip mollit
        cillum ad qui fugiat nulla aliqua nostrud fugiat velit. Incididunt eu
        cupidatat sint commodo laborum dolor Lorem aliquip eiusmod deserunt anim
        sunt occaecat proident. Quis ea excepteur pariatur ad commodo. Non anim
        eiusmod esse dolore consectetur commodo ut reprehenderit officia
        consequat eu. Exercitation incididunt nisi mollit consectetur cillum
        elit dolore pariatur duis cillum duis laborum incididunt veniam
        deserunt. Dolore ipsum reprehenderit sint duis dolore adipisicing aute
        tempor irure pariatur esse ut. Laborum mollit irure ipsum incididunt ea
        tempor nisi ex consequat reprehenderit excepteur pariatur nulla. Laborum
        ut laborum incididunt ex consectetur nisi.
      </div>
      <div style={{ background: "#ffcfac" }}>
        <SafeArea position="bottom" />
      </div>
    </div>
  ),
};
