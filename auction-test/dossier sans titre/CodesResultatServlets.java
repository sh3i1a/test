package fr.eni.encheres.servlets;

public abstract class CodesResultatServlets {

    //Inscription
    public static final int PRENOM_OBLIGATOIRE=30000;
    public static final int NOM_OBLIGATOIRE=30001;
    public static final int TELEPHONE_OBLIGATOIRE=30002;
    public static final int RUE_OBLIGATOIRE=30003;
    public static final int VILLE_OBLIGATOIRE=30004;
    public static final int MDP_OBLIGATOIRE=30005;
    public static final int CONCORDANCE_MDP = 30006;

    //Nouvelle vente
    public static final int NOM_ARTICLE_OBLIGATOIRE=40000;
    public static final int DESCRIPTION_OBLIGATOIRE=40001;
    public static final int DATE_DEBUT_OBLIGATOIRE=40002;
    public static final int DATE_FIN_OBLIGATOIRE=40003;
    public static final int PRIX_INITIAL_OBLIGATOIRE=40004;
    public static final int UTILISATEUR_OBLIGATOIRE=40005;
}
