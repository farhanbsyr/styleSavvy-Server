import paypal from "paypal-rest-sdk";

paypal.configure({
  mode: "sandbox",
  client_id:
    "Ab5vo7V9XlKscu2LMagxa5n_IMcvg6cesx8X6mQxmPQnbzAhmHmSFUzLGOnR0_dqLOOodB0rAPWpyh47",
  client_secret:
    "EO-YuYaOrejka1vsQ-h5Lz_gaC31zSClkmBYK1tI5zNAhITt7MG4dMhdEsYTXse_8EcAIr1tRO4-hhcz",
});

export default paypal;
