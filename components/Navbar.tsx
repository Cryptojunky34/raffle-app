import { Container, Flex, Text } from "@chakra-ui/react";
import { ConnectWallet, useAddress, useContract, useContractRead } from "@thirdweb-dev/react";
import Link from "next/link";
import { CONTRACT_ADDRESS } from "../const/addresses";

export default function Navbar() {
    const address = useAddress();

    const {
        contract
    } = useContract(CONTRACT_ADDRESS);

    const {
        data: admin,
        isLoading: adminLoading
    } = useContractRead(contract, "admin");

    return (
        <Container maxW={"1440px"} py={8}>
            <Flex flexDirection={"row"} justifyContent={"space-between"} alignItems={"right"}>
                <Link href={"/"}>
                    <Text fontSize={"xl"} fontWeight={"bold"}>DogesLegacy Raffle App</Text>
                </Link>
                <Flex flexDirection={"row"} alignItems={"right"}>
                    {!adminLoading && address === admin && (
                        <Link href={"/admin"}>
                            <Text fontWeight={"bold"} mr={10}>Admin</Text>
                        </Link>
                    )}
                    <ConnectWallet />
                </Flex>
            </Flex>
        </Container>
    )
}
